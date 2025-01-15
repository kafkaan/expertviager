import { useState, useRef } from "react";
import InputField from "../../../components/Input";
import { SelectList } from "../../../components/SelectList";
import emailjs from "@emailjs/browser";

export default function FormContact() {
  const formRef = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const templateParams = {
      name: formInputs.name,
      firstName: formInputs.firstName,
      email: formInputs.email,
      phone: formInputs.phone,
      age: formInputs.age,
      adresse: formInputs.adresse,
      postalCode: formInputs.postalCode,
      city: formInputs.city,
      type: formInputs.type,
      room: formInputs.room,
      surface: formInputs.surface,
      groundSurface: formInputs.groundSurface,
      commentaire: formInputs.commentaire,
    };

    console.log(templateParams);

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
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );

      e.currentTarget.reset();
    }
  };

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

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormInputs((prevInputs) => ({ ...prevInputs, type: value }));
    console.log(value);
    console.log(formInputs);
  };

  return (
    <section className="form-contact margin-top-sm">
      <h3 className="form-contact__title title-xl">
        Recevez une estimation viagère personnalisée et gratuite
      </h3>
      <p className="form-contact__text text">
        Vous souhaitez en savoir plus ? Renseignez quelques informations, un
        conseiller vous contactera pour étudier votre projet et vous donner des
        conseils personnalisés.
      </p>

      <form ref={formRef} onSubmit={sendEmail} className="form-contact__form">
        <h4 className="form-contact__form__title title-lg">
          Informations personnelles
        </h4>

        <div className="form-contact__form__personal-info">
          <InputField
            label="Nom"
            name="name"
            placeholder="Entrez votre nom"
            helperText="Veuillez entrer votre nom complet."
            errorText="Ce champ est requis."
            value={formInputs.name}
            onChange={handleInputChange}
          />
          <InputField
            label="Prénom"
            name="firstName"
            placeholder="Entrez votre prénom"
            helperText="Veuillez entrer votre prénom."
            errorText="Ce champ est requis."
            value={formInputs.firstName}
            onChange={handleInputChange}
          />
          <InputField
            label="Email"
            name="email"
            placeholder="Entrez votre email"
            helperText="Veuillez entrer votre email."
            errorText="Ce champ est requis."
            value={formInputs.email}
            onChange={handleInputChange}
          />
          <InputField
            label="Téléphone *"
            name="phone"
            placeholder="Entrez votre téléphone *"
            helperText="Veuillez entrer votre téléphone."
            errorText="Ce champ est requis."
            value={formInputs.phone}
            onChange={handleInputChange}
            required = {true}
          />
          <InputField
            label="Age"
            name="age"
            placeholder="Entrez votre âge"
            helperText="Veuillez entrer votre âge."
            errorText="Ce champ est requis."
            value={formInputs.age}
            onChange={handleInputChange}
          />
        </div>
        <h4 className="form-contact__form__title title-lg">
          Descriptif de votre bien
        </h4>
        <div className="form-contact__form__description">
          <InputField
            label="Adresse"
            name="Adresse,"
            placeholder="Entrez votre adresse"
            helperText="Veuillez entrer votre Adresse."
            errorText="Ce champ est requis."
            value={formInputs.adresse}
            onChange={handleInputChange}
          />
          <InputField
            label="Code postal"
            name="postalCode"
            placeholder="Entrez votre code postal"
            helperText="Veuillez entrer votre code postal."
            errorText="Ce champ est requis."
            value={formInputs.postalCode}
            onChange={handleInputChange}
          />
          <InputField
            label="Ville"
            name="city"
            placeholder="Entrez votre ville"
            helperText="Veuillez entrer votre ville."
            errorText="Ce champ est requis."
            value={formInputs.city}
            onChange={handleInputChange}
          />
          <SelectList
            name="type"
            items={["Appartement", "Maison", "Autre"]}
            listName="Type de bien"
            onSelect={handleSelectChange}
            selectedValue={formInputs.type}
          />
          <InputField
            label="Nombre de pièces"
            name="room"
            placeholder="Entrez le nombre de pièces"
            helperText="Veuillez entrer le nombre de pièces."
            errorText="Ce champ est requis."
            value={formInputs.room}
            onChange={handleInputChange}
          />
          <InputField
            label="superficie habitable"
            name="superficie"
            placeholder="Entrez la superficie habitable"
            helperText="Veuillez entrer la superficie habitable."
            errorText="Ce champ est requis."
            value={formInputs.surface}
            onChange={handleInputChange}
          />
          <InputField
            label="Surface terrain"
            name="groundSurface"
            placeholder="Entrez la surface terrain"
            helperText="Veuillez entrer la surface terrain."
            errorText="Ce champ est requis."
            value={formInputs.groundSurface}
            onChange={handleInputChange}
          />
        </div>
        <h4 className="form-contact__form__title title-lg">Commentaire</h4>
        <div className="form-contact__form__comment">
          <InputField
            label="autre(s) précision(s)"
            name="commentaire"
            placeholder="autre(s) précision(s)"
            helperText="Veuillez entrer votre commentaire."
            errorText="Ce champ est requis."
            value={formInputs.commentaire}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-contact__form__submit">
          <button type="submit" className="form-contact__form__submit-btn btn">
            Recevoir une estimation
          </button>
        </div>
      </form>
    </section>
  );
}
