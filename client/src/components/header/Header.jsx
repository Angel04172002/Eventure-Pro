import { Link } from 'react-router-dom';

export default function Header() {
    return (

        <header>
            <div style={{position: 'fixed', top: 10, marginLeft: 'auto', marginRight: 'auto'}} className='hidden lg:flex lg:gap-x-12'>

                <Link to="/event/all" className='text-sm font-semibold leading-6 text-gray-900'>
                All Events
                </Link>

                <Link to="/event/create" className='text-sm font-semibold leading-6 text-gray-900'>
                Create Event
                </Link>

                <Link to="/login" className='text-sm font-semibold leading-6 text-gray-900'>
                Login
                </Link>


                <Link to="/register" className='text-sm font-semibold leading-6 text-gray-900'>
                Register
                </Link>

            </div>
        </header>

    )
}