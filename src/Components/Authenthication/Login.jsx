
import "./Login.css"
export default function Login() {
    return (
        <div className="Login">
            <h1>Log In</h1>

            <div className="inputs">
                <form>
                    
                    <div className="input">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email"/>
                    </div>

                    <div className="input">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password"/>
                    </div>

                    <button type="submit">
                        Login
                      
                    </button>
                </form>
            </div>
        </div>
    )
}