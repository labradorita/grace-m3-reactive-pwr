import React from "react";
import "../stylesheets/form.scss";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      class: "hidden"
    };
    this.putHiddenClass = this.putHiddenClass.bind(this);
  }
  putHiddenClass() {
    let nextState;
    this.setState(prevState => {
      if (prevState.class === "hidden") {
        nextState = "";
      } else {
        nextState = "hidden";
      }
      return {
        class: nextState
      };
    });
  }

  render() {
    const actionToName = this.props.actionToName;
    const actionToJob = this.props.actionToJob;
    return (
      <section className={`data js-collapse ${this.state.class}`}>
        <div className="data__title">
          <h2 className="data__title__text home--title">
            <i className="data__title__text__icon far fa-keyboard"></i>Rellena
          </h2>
          <button
            className="data__title__btn js-btn-collapse"
            onClick={this.putHiddenClass}
          >
            <i className="fa fa-chevron-up"></i>
          </button>
        </div>
        <div className="data__form--wrapper collapse">
          <div action="" className="data__form" method="POST">
            <label for="name" className="data__form-label">
              Nombre completo
            </label>
            <input
              type="text"
              name="name"
              className="data__form-item js-form_name"
              placeholder="Ej: Sally Jill"
              onChange={actionToName}
            />
            <label for="job" className="data__form-label">
              Puesto
            </label>
            <input
              type="text"
              name="job"
              className="data__form-item js-form__job"
              placeholder="Ej: Front-end unicorn"
              onChange={actionToJob}
            />
            <label for="user_image" className="data__form__image-label">
              Imagen de perfil
            </label>
            <div className="data__form__image">
              <label for="photo" className="data__form__image-button">
                Añadir imagen
                <input type="file" id="photo" />
              </label>
              <div className="data__form__image-thumbnail"></div>
            </div>
            <label for="email" className="data__form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="data__form-item js-link_email"
              placeholder="Ej: adalab@gmail.com"
            />
            <label for="job" className="data__form-label">
              Teléfono
            </label>
            <input
              type="tel"
              name="phone"
              className="data__form-item js-link_phone"
              placeholder="Ej: 632-54-12-36"
            />
            <label for="linkedin" className="data__form-label">
              LinkedIn
            </label>
            <input
              type="text"
              name="linkedin"
              className="data__form-item js-link_linkedin"
              placeholder="Ej: sally.hill"
            />
            <label for="github" className="data__form-label">
              GitHub
            </label>
            <span className="data__form-before">@</span>
            <input
              type="text"
              name="github"
              className="data__form-item js-link_github"
              placeholder="Ej: @sallyHill"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Form;