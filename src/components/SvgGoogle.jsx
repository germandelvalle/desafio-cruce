import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 24C0 10.745 10.745 0 24 0s24 10.745 24 24-10.745 24-24 24S0 37.255 0 24z"
        fill="#fff"
      />
      <path
        d="M24 17.621c1.953 0 3.27.844 4.021 1.549l2.935-2.866C29.154 14.628 26.808 13.6 24 13.6c-4.067 0-7.58 2.334-9.29 5.731l3.362 2.612c.844-2.508 3.178-4.322 5.928-4.322z"
        fill="#EA4335"
      />
      <path
        d="M33.984 24.231c0-.855-.07-1.479-.22-2.126H24v3.86h5.732c-.116.959-.74 2.403-2.127 3.374l3.282 2.542c1.965-1.814 3.097-4.484 3.097-7.65z"
        fill="#4285F4"
      />
      <path
        d="M18.084 26.057A6.401 6.401 0 0117.737 24c0-.716.127-1.41.335-2.057l-3.363-2.612A10.41 10.41 0 0013.6 24c0 1.675.405 3.259 1.11 4.668l3.374-2.611z"
        fill="#FBBC05"
      />
      <path
        d="M24 34.4c2.808 0 5.165-.924 6.887-2.52l-3.282-2.541c-.878.612-2.057 1.04-3.605 1.04-2.75 0-5.084-1.815-5.916-4.322l-3.363 2.611C16.43 32.066 19.932 34.4 24 34.4z"
        fill="#34A853"
      />
    </svg>
  )
}

export default SvgComponent