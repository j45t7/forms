import useInput from '../hooks/use-input-hook'

const isNotEmpty = value => value.trim() !== ''
const BasicForm = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput(isNotEmpty)

  const {
    value: enteredSurname,
    isValid: enteredSurnameIsValid,
    hasError: surnameInputHasError,
    valueChangeHandler: surnameChangeHandler,
    valueBlurHandler: surnameBlurHandler,
    reset: resetSurnameInput
  } = useInput(isNotEmpty)

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput(value => value.includes('@'))


  let formIsValid = false

  if(enteredNameIsValid && enteredEmailIsValid && enteredSurnameIsValid){
    formIsValid = true
  }
  const formSubmitHandler = (event) => {
    event.preventDefault()

    if(!formIsValid){
      return
    }
    console.log(enteredName)
    console.log(enteredSurname)
    console.log(enteredEmail)
    resetNameInput('')
    resetSurnameInput('')
    resetEmailInput('')
  }
  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control'
  const surnameInputClasses = surnameInputHasError ? 'form-control invalid' : 'form-control'
  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className={nameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input
          type='text'
          id='name'
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
          />
          {nameInputHasError && <p className='error-text'>Name must not be empty.</p>}
        </div>
        <div className={surnameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input
          type='text'
          id='name'
            onChange={surnameChangeHandler}
            onBlur={surnameBlurHandler}
            value={enteredSurname}
          />
          {surnameInputHasError && <p className='error-text'>Name must not be empty.</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
        type='text'
        id='name'
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
         {emailInputHasError && <p className='error-text'>Name must not be empty.</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
