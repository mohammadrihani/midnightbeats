import {useState} from "react";
function Contact(){
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[submitted,setSubmitted]=useState(false);
    const handleSubmit=(e)=>{
        e.preventDefault();
        setSubmitted(true);
    };
    return(
        <div className="contact-page">
            <div className="container">
                <h1 className="text-center">
                    Contact Us
                </h1>
                <p className="text-center contact-sub">
                    We'd love to hear your feedback or questions.
                </p>
                <div className="contact-box">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label> Name</label>
                            <input type="text" 
                            className="form-control contact-input"
                            placeholder="your name"
                            value={name}
                            onChange={(e)=> setName(e.target.value)
                        }
                        >
                            </input>
                            </div>
                            <div className="form-group">
                                <label> Email</label>
                                <input type="text" 
                                className="form-control contact-input"
                                placeholder="your email"
                                value={email}
                                onChange={(e)=>
                                    setEmail(e.target.value)
                                }
                                ></input>
                        </div>
                        <button type="submit" className="contact-btn">Send Message</button>
                    </form>
                    {submitted && (
                        <p className="mt-3 text-center">
                            Thank your for contacting us!
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
export default Contact;