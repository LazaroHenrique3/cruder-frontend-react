import { Link } from "react-router-dom"
import {BsPlusCircle} from 'react-icons/bs'

import './HeaderMain.css'

function HeaderMain() {
    return (
        <header>
            <div className="container">
                <div className="logo">
                    <h1>CRUder</h1>
                </div>

                <div className="btn-newPost">
                    <Link to="/post">
                        <button>
                            <span>Novo post</span>
                            <BsPlusCircle/>
                        </button>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default HeaderMain