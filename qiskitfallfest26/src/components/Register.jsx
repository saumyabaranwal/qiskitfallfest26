import { useState } from 'react'
import './Register.css'

function Register({ data }) {
  const [form, setForm] = useState({ name: '', email: '', college: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Hook this up to your registration backend / form service
    console.log('Register submission:', form)
  }

  return (
    <section id="register" className="register">
      <div className="container register-inner">
        <p className="section-eyebrow register-eyebrow">{data.eyebrow}</p>
        <h2 className="register-heading">{data.heading}</h2>
        <p className="register-subtext">{data.subtext}</p>

        <form className="register-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="college"
            placeholder="College / Organization"
            value={form.college}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn btn-primary">Register Now</button>
        </form>
      </div>
    </section>
  )
}

export default Register
