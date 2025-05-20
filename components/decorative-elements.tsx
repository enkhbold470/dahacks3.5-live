export default function DecorativeElements() {
  return (
    <>
      {/* Bubbles */}
      <div className="bubble w-24 h-24 top-[20%] right-[10%] opacity-30"></div>
      <div className="bubble w-16 h-16 bottom-[30%] left-[15%] opacity-20"></div>
      <div className="bubble w-32 h-32 bottom-[10%] right-[20%] opacity-25"></div>

      {/* Stars */}
      <div className="star top-[15%] left-[25%]">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
            fill="#FFC107"
          />
        </svg>
      </div>
      <div className="star top-[40%] right-[15%]">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
            fill="#FFC107"
          />
        </svg>
      </div>
      <div className="star bottom-[25%] left-[10%]">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
            fill="#FFC107"
          />
        </svg>
      </div>
    </>
  )
}
