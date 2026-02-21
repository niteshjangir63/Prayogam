
import "./SignUp.css"
export default function SignUp() {
    return (
        <div className="Signup">
            <h1>Sign Up</h1>

            <div className="inputs">
                <form>
                    <div className="input">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name"/>
                    </div>

                    <div className="input">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email"/>
                    </div>

                    <div className="input">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password"/>
                    </div>

                    <button type="submit">
                        Sign Up

                    </button>
                </form>
            </div>
        </div>
    )
}