import './ThemeSelector.css'
import { useTheme } from "../hooks/useTheme";
import iconChangeImg from "../assets/dark&ligh-modes.svg"

const themeColors = ['#85249c', '#249c6b', '#b70233']


export default function ThemeSelector() {
    const { changeColor, changeMode, mode } = useTheme()

    const toggleMode = () => {
        changeMode(mode === 'dark' ? 'light' : 'dark')
    }
    console.log(mode);

    return ( 
        <div className='theme-selector'>
            <div className="mode-toggle">
                <img
                src={iconChangeImg}
                alt="Dark-Light modes"
                onClick={toggleMode}
                    style={{ filter: mode === 'dark' ? 'invert(100%)' : 'invert(20%)' }}
                 />
            </div>


            <div className="theme-buttons">
                {themeColors.map((color) => (
                    <div key={color}
                    onClick={() => changeColor(color)}
                    style={{background: color}}
                    />
                ))}
            </div>
        </div>
     );
}