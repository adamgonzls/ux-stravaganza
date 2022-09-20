import './001-sign-up-page.css'
// https://dribbble.com/shots/16703354-Log-in-page-Untitled-UI

export default function SignUpPage() {
  return (
    <section className='sign-up__page'>
      <div className='sign-up__content'>
        <div>
          <h1>Sign Up Now</h1>
          <p>Welcome! Please enter your details.</p>
          <form className='sign-up__form' action=''>
            <label htmlFor='email'>Email</label>
            <input id='email' name='email' type='email' />
            <label htmlFor='password'>Password</label>
            <input name='password' type='password' />
            <div className='row__inputs'>
              <label htmlFor=''>
                <input type='checkbox' />
                Remember me for 30 days
              </label>
              <a href='#'>Forgot Password</a>
            </div>
            <button>Sign in</button>
          </form>
        </div>
      </div>
      <div className='sign-up-background'>
        <div className='review'>
          <h2>
            We've been using this platform to kick start every new project and
            can't imagine working without it.
          </h2>
          <div className='review-row'>
            <span>Andi Lane</span>
            <span>★★★★★</span>
          </div>
          <div className='review-row'>
            <div>
              <p>Founder, Catalog</p>
              <p>Web Design Agency</p>
            </div>
            <span>&lt;</span>
            <span>&gt;</span>
          </div>
        </div>
      </div>
    </section>
  )
}
