function FieldContainer({ name, type, title, placeholder, large }) {
  return (
    <div className='field-container'>
      <label className='form-title'>{title}</label>
      {!large && (
        <input
          name={name}
          type={type}
          className={`input-area`}
          placeholder={placeholder}
        ></input>
      )}
      {large && (
        <textarea name={name} className={`input-area large-input`}></textarea>
      )}
    </div>
  );
}

export default FieldContainer;
