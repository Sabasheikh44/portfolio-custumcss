import "../style/contact.css"

const Contact = () => {
  return (
    <div>
      <section className='contact-form'>
        <h2 className='fade-in'>Contact Us</h2>
        <form>
            <input type="text" placeholder=' Full Name' required/>
            <input type="email" placeholder='Email Address' required/>
            <input type="text" placeholder='Phone Number'/>
            <textarea placeholder='Your Message' rows={5} required></textarea>
            <button type='submit'>Sent Messg</button>

        </form>
      </section>
    </div>
   );
 };

export default Contact;