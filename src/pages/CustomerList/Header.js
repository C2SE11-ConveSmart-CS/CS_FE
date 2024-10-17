import AddIcon from '../../icons/AddIcon'
import NotiIcon from '../../icons/NotiIcon'
import SettingIcon from '../../icons/SettingIcon'
import Search from './Search'

const Header = () => {
  return (
    <>
      <header className="h-20 bg-white flex items-center sticky top-0 right-0 left-0 px-7">
        <Search iconRight={false} />
        <div className="pl-3">
        <span className="flex justify-center items-center rounded-lg">
                <AddIcon />
              </span>
        </div>
        <div className="flex-1 flex justify-end gap-4">
          <button>
            <NotiIcon />
          </button>
          <button>
            <SettingIcon />
          </button>
          <button className="flex items-center gap-2">
            <img src="/images/avatar.png" alt="logo" width={40} height={40} />

            <svg
              width="8"
              height="6"
              viewBox="0 0 8 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.410247 2.41754L3.00025 5.00754C3.09276 5.10025 3.20265 5.17379 3.32362 5.22398C3.4446 5.27416 3.57428 5.29999 3.70525 5.29999C3.83622 5.29999 3.9659 5.27416 4.08687 5.22398C4.20784 5.17379 4.31773 5.10025 4.41025 5.00754L7.00025 2.41754C7.63025 1.78754 7.18025 0.707543 6.29025 0.707543L1.11025 0.707543C0.220246 0.707543 -0.219753 1.78754 0.410247 2.41754Z"
                fill="#2C2E32"
              />
            </svg>
          </button>
        </div>
      </header>
    </>
  )
}

export default Header
