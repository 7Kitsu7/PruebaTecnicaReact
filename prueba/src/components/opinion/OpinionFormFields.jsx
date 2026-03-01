import { styles } from './OpinionFormFields.styles';

export const OpinionFormFields = ({ register, errors, name }) => {
  
  // Función auxiliar para manejar clases dinámicas de error
  const getInputClass = (error) => `
    ${styles.inputBase} 
    ${error ? styles.inputError : styles.inputActive}
  `;

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        
        {/* Campo: Nombre del Entrenador */}
        <div className={styles.fieldGroup}>
          <label className={styles.label}>Nombre Entrenador</label>
          <input 
            {...register("trainerName")} 
            placeholder="Tu nombre"
            className={getInputClass(errors.trainerName)}
          />
          {errors.trainerName && (
            <p className={styles.errorText}>{errors.trainerName.message}</p>
          )}
        </div>

        {/* Campo: Puntuación (Select) */}
        <div className={styles.fieldGroup}>
          <label className={styles.label}>Tu Puntuación</label>
          <div className="relative">
            <select 
              {...register("rating")} 
              className={`${getInputClass(errors.rating)} ${styles.select}`}
            >
              <option value="5">⭐⭐⭐⭐⭐ Excelente</option>
              <option value="4">⭐⭐⭐⭐ Muy Bueno</option>
              <option value="3">⭐⭐⭐ Regular</option>
              <option value="2">⭐⭐ Malo</option>
              <option value="1">⭐ No me gusta</option>
            </select>
          </div>
        </div>
      </div>

      {/* Campo: Comentario (Textarea) */}
      <div className={styles.fieldGroup}>
        <label className={styles.label}>
          Análisis de {name || 'Pokémon'}
        </label>
        <textarea 
          {...register("comment")} 
          rows="4" 
          placeholder="Describe tu experiencia con este Pokémon..."
          className={`${getInputClass(errors.comment)} ${styles.textarea}`}
        />
        {errors.comment && (
          <p className={styles.errorText}>{errors.comment.message}</p>
        )}
      </div>
    </div>
  );
};