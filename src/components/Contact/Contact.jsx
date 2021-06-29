import React, { useState } from "react";
import EmailService from "../../services/email.service";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [message2, setMessage2] = useState("");
  const [successful, setSuccessful] = useState(false);

  const onChangeName = (e) => {
    const name = e.target.value;
    setName(name);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangeSubject = (e) => {
    const subject = e.target.value;
    setSubject(subject);
  };

  const onChangeMessage = (e) => {
    const message = e.target.value;
    setMessage(message);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    EmailService.send_email(name, email, subject, message).then(
      (response) => {
        setMessage2("Đã gửi mail thành công");
        setSuccessful(true);
        console.log(response);
      },
      (error) => {
        setMessage2(
          "Có lỗi trong quá trình gửi mail, xin vui lòng thử lại sau"
        );
        console.log(error);
        setSuccessful(false);
      }
    );
  };

  return (
    <div>
      {!successful && (
        <div className="mt-3">
          <h4 className="font-weight-bold text-left text-secondary border-bottom border-secondary">
            CONTACT US
          </h4>

          <div className="mx-auto" style={{ paddingTop: "1rem" }}>
            <form id="contact-form" method="post" action="">
              <div className="messages"></div>
              <div className="controls">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="font-weight-bold">Your name *</label>
                      <input
                        id="form_name"
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Please enter your name *"
                        required="required"
                        data-error="Firstname is required."
                        onChange={onChangeName}
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="font-weight-bold">Email *</label>
                      <input
                        id="form_email"
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Please enter your email *"
                        required="required"
                        data-error="Valid email is required."
                        onChange={onChangeEmail}
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm">
                    <div className="form-group">
                      <label className="font-weight-bold">Subject *</label>
                      <input
                        id="form_subject"
                        type="subject"
                        name="subject"
                        className="form-control"
                        placeholder="Please enter your subject"
                        onChange={onChangeSubject}
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="font-weight-bold">Message *</label>
                      <textarea
                        id="form_message"
                        name="message"
                        className="form-control"
                        placeholder="Message for me *"
                        rows="4"
                        required
                        data-error="Please,leave us a message."
                        onChange={onChangeMessage}
                      ></textarea>
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <button
                      type="submit"
                      className="btn btn-warning"
                      onClick={handleSubmit}
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
      {message && (
        <div className="border border-secondary rounded">
          <alert>{message2}</alert>
        </div>
      )}
    </div>
  );
}
