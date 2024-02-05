import React from "react";
import '@/app/components/Form/form.css'

function Form() {
  return (
    <section className="contact-section">
      <form className="contact-form">
        <label>Email:</label>
        <input type="email" name="email" required />

        <label>Teléfono:</label>
        <input type="tel" name="phone" required />

        <label>Mensaje:</label>
        <textarea name="message" rows="4" required></textarea>

        <label className="button">
          <button type="submit" className="submit-button">
            Enviar
          </button>
        </label>
        
      </form>
    </section>
  );
}

export default Form;
