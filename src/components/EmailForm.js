import React, {useState} from 'react'
import emailjs from 'emailjs-com'
import {
    Alert,
} from 'react-bootstrap'


const EmailForm = (props) => {
    const [state, setState] = useState({
        clientSubject: '',
        clientName: '',
        clientEmail: '',
        clientMobile: '',
        clientMessage: ''
    });
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);

    function handleChange(event) {
        event.preventDefault();
        const { name, value } = event.target;
        setState((state) => ({ ...state, [name]: value}));
    }
    
    function handleSubmit(event) {
        event.preventDefault();
        const data = {
            subject: state.clientSubject,
            from_name: state.clientName, 
            sender_email: state.clientEmail,
            phone: state.clientMobile,
            message: state.clientMessage, 
        };
        try {
            emailjs.send(
                process.env.GATSBY_EMAILJS_SERVICE_ID, 
                process.env.GATSBY_EMAILJS_TEMPLATE_ID,
                data, 
                process.env.GATSBY_EMAILJS_USER_ID
              ).then(res => {
                console.log('Email successfully sent!');
                setShowSuccess(true);
                setState((state) => ({ ...state, 
                    clientSubject: '',
                    clientName: '',
                    clientEmail: '',
                    clientMobile: '',
                    clientMessage: ''
                }));
            })// Handle errors
            .catch(err => {
                console.error('Unable to send email due to error:', err);
                setShowError(true);
            });
        }
        catch (error) {
            console.log(error);
        }
        
        
        event.target.reset();
    }
    return (
        <div className="email-form">
           
            <form className="test-mailing" onSubmit={handleSubmit}>
                <div>
                    <input className={props.type} onChange={handleChange} value={state.clientSubject} type="text" name="clientSubject" placeholder="Subject*" maxLength={200} required autoComplete="off"/>
                    <input className={props.type} onChange={handleChange} value={state.clientName} type="text" name="clientName" placeholder="Full Name*" maxLength={50} required autoComplete="off"/>
                    <input className={props.type} onChange={handleChange} value={state.clientEmail} type="text" name="clientEmail" placeholder="Email*" maxLength={50} required autoComplete="off"/>
                    <input className={props.type} onChange={handleChange} value={state.clientMobile} type="text" name="clientMobile" placeholder="Mobile Phone" maxLength={50} autoComplete="off"/>
                    <textarea
                        className={props.type}
                        name="clientMessage"
                        onChange={handleChange}
                        placeholder="Message*"
                        required
                        rows="10"
                        maxLength="4000"
                        value={state.clientMessage}
                        style={{width: '100%', height: '150px'}}
                    />
                </div>
                <Alert show={showSuccess} variant="success" onClose={() => setShowSuccess(false)} dismissible>
                    <p className="mb-0">Your email has been sent!</p>
                </Alert>
                <Alert show={showError} variant="danger" onClose={() => setShowError(false)} dismissible>
                    <p className="mb-0">Failed to send email. Please try again.</p>
                </Alert>
                <input type="submit" value="Submit" className="btn btn-primary my-btn filled-btn"/>
            </form>
        </div>
    );
}

export default EmailForm

