import chefClaudeLogo from "../images/chef-claude-icon.png"

export default function Header() {
    return (
        <header>
            <img src={chefClaudeLogo} alt='cheficon'/>
            <h1>Chef Claude</h1>
        </header>
    )
}