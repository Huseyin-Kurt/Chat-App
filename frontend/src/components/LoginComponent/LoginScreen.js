import "./LoginScreen.css"

const LoginScreen=() =>
{
    return (
        <div className="container-div">
            <p className="field-name">Nick Name</p>
            <input className="input" type="text"></input>
            <p className="field-name">Room Name</p>
            <input className="input" type="text"></input>
            <button className="button" >Chat !</button>
        </div>
    );
}

export default LoginScreen;