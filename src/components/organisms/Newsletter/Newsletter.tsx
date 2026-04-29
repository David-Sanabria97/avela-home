'use client'

import { useState } from 'react'
import styles from './Newsletter.module.scss'

export default function Newsletter() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // Aquí irá la integración con el backend en la fase 2
    console.log({ name, email })
  }

  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        <div>
          <span className={styles.eyebrow}>Sé parte de Avela</span>
          <h2 className={styles.title}>
            Recibe <em>contenido exclusivo</em>
          </h2>
          <p className={styles.desc}>
            Lanzamientos, rituales de bienestar y promociones especiales
            directamente en tu correo.
          </p>
          <div className={styles.perks}>
            <span className={styles.perk}>10% de descuento en tu primera compra</span>
            <span className={styles.perk}>Acceso anticipado a nuevos aromas</span>
            <span className={styles.perk}>Rituales y consejos de bienestar semanales</span>
          </div>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={styles.input}
            type="text"
            placeholder="Tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className={styles.input}
            type="email"
            placeholder="Tu correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button className={styles.btn} type="submit">
            Suscribirme →
          </button>
         
        </form>

      </div>
    </section>
  )
}