import { useState, useRef } from "react";
import InputField from "../../../components/Input";
import emailjs from "@emailjs/browser";

export default function FormContact() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [messageSent, setMessageSent] = useState(false); // État pour afficher le message de confirmation

  const [formInputs, setFormInputs] = useState({
    name: "",
    firstName: "",
    email: "",
    phone: "",
    age: "",
    adresse: "",
    postalCode: "",
    city: "",
    type: "",
    room: "",
    surface: "",
    groundSurface: "",
    commentaire: "",
  });

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const templateParams = { ...formInputs };

    if (formRef.current) {
      emailjs
        .send(
          "service_dbn2qyb",
          "template_q6rx1do",
          templateParams,
          "bsKw7OJx0tyNd65U7"
        )
        .then(
          (result) => {
            console.log("Message envoyé :", result.text);
            setMessageSent(true); // Active le message de confirmation
          },
          (error) => {
            console.log("Erreur lors de l'envoi :", error.text);
          }
        );

      e.currentTarget.reset();
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  return (
    <section className="form-contact margin-top-sm">
      <h3 className="form-contact__title title-xl">
        Posez une question gratuitement !
      </h3>
      <p className="form-contact__text text">
        Demandez une évaluation !
        <br />
        Trouvez un expert près de chez vous !
      </p>

      <form ref={formRef} onSubmit={sendEmail} className="form-contact__form">
        <h4 className="form-contact__form__title title-lg">
          Informations personnelles
        </h4>
        <div className="form-contact__form__personal-info">
          <InputField
            label="Email"
            name="email"
            placeholder="Entrez votre email"
            value={formInputs.email}
            onChange={handleInputChange}
          />
          <InputField
            label="Téléphone *"
            name="phone"
            placeholder="Entrez votre téléphone *"
            value={formInputs.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        <h4 className="form-contact__form__title title-lg">Commentaire</h4>
        <div className="form-contact__form__comment">
          <InputField
            label="autre(s) précision(s)"
            name="commentaire"
            placeholder="autre(s) précision(s)"
            value={formInputs.commentaire}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-contact__form__submit">
          <button type="submit" className="form-contact__form__submit-btn btn">
            Recevoir une estimation
          </button>
          {messageSent && (
            <p className="confirmation-message text">
              ✅ Votre message a bien été envoyé !
            </p>
          )}
        </div>
      </form>
    </section>
  );
}
