import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    // input element is destructured from formProps
    //console.log(formProps);
    // console.log(meta);
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label htmlFor="">{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>

      // These are the same fonctionality
      // <input
      //   onChange={formProps.input.onChange} // we need to add these props manually
      //   value={formProps.input.value} // All other stuff will be done by ReduxForm itself
      // />
    );
  };

  onSubmit = formValues => {
    // event.preventDefault(); // we dont have to do that anymore with ReduxForm
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)} // handleSubmit prop comes from ReduxForm
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "You must enter a title";
  }

  if (!formValues.description) {
    errors.description = "You must enter a description";
  }

  return errors;
};

export default reduxForm({
  form: "streamForm",
  validate: validate
})(StreamForm);
