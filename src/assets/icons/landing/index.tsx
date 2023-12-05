export const ArrowNext = ({ color = 'none' }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.0909 7.26521C14.4968 6.8906 15.1294 6.9159 15.504 7.32172L18.7348 10.8217C19.0884 11.2047 19.0884 11.7952 18.7348 12.1782L15.504 15.6783C15.1294 16.0841 14.4968 16.1094 14.091 15.7348C13.6851 15.3602 13.6598 14.7276 14.0344 14.3217L15.716 12.5L6 12.5C5.44771 12.5 5 12.0523 5 11.5C5 10.9477 5.44771 10.5 6 10.5L15.716 10.5L14.0344 8.67829C13.6598 8.27247 13.6851 7.63981 14.0909 7.26521Z"
        fill={color}
      />
    </svg>
  );
};

export const ArrowPrevious = ({ color = 'none' }) => {
  return (
    <span style={{ transform: 'rotateX(90deg)' }}>
      <svg
        className="arrow"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.90906 7.26521C9.50324 6.8906 8.87058 6.9159 8.49597 7.32172L5.2652 10.8217C4.9116 11.2047 4.9116 11.7952 5.26519 12.1782L8.49597 15.6783C8.87057 16.0841 9.50323 16.1094 9.90905 15.7348C10.3149 15.3602 10.3402 14.7276 9.96558 14.3217L8.28397 12.5L18 12.5C18.5523 12.5 19 12.0523 19 11.5C19 10.9477 18.5523 10.5 18 10.5L8.284 10.5L9.96557 8.67829C10.3402 8.27247 10.3149 7.63981 9.90906 7.26521Z"
          fill={color}
        />
      </svg>
    </span>
  );
};

export const ArrowSlidePrevious = ({ color = '#A1A1A9' }) => {
  return (
    <span className="arrow arrow--left">
      <svg
        style={{ transform: 'rotateX(90deg)' }}
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14 0.875C6.75126 0.875 0.875 6.75126 0.875 14C0.875 21.2487 6.75126 27.125 14 27.125C21.2487 27.125 27.125 21.2487 27.125 14C27.125 6.75126 21.2487 0.875 14 0.875ZM0 14C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14Z"
          fill={color}
          fill-opacity="0.8"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.3717 9.91675C13.4861 9.91675 13.6003 9.96105 13.6873 10.0496C13.8607 10.2268 13.8607 10.5131 13.6861 10.6891L11.7041 12.6922L11.6583 12.7326C11.4833 12.8674 11.2335 12.8534 11.0745 12.691C10.9878 12.6023 10.9444 12.4872 10.9444 12.3721C10.9444 12.2557 10.9878 12.14 11.0757 12.0514L13.0571 10.0484L13.1029 10.0081C13.1822 9.94717 13.277 9.91675 13.3717 9.91675ZM9.77847 13.5479H18.6876L18.7434 13.5515C18.963 13.5793 19.133 13.7696 19.133 14C19.133 14.2496 18.9335 14.4521 18.6876 14.4521H10.8571L13.686 17.311L13.726 17.3572C13.8594 17.534 13.8462 17.7881 13.6872 17.9506C13.5138 18.1272 13.2316 18.1278 13.0576 17.9518L9.46427 14.3201L9.42464 14.2746C9.36437 14.1951 9.33301 14.0979 9.33301 14C9.33301 13.9415 9.34427 13.883 9.36687 13.8276C9.43574 13.6582 9.59788 13.5479 9.77847 13.5479Z"
          fill={color}
          fill-opacity="0.8"
        />
      </svg>
    </span>
  );
};

export const ArrowSlideNext = ({ color = '#A1A1A9' }) => {
  return (
    <span style={{ transform: 'rotateX(90deg)' }} className="arrow arrow--right">
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14 0.875C6.75126 0.875 0.875 6.75126 0.875 14C0.875 21.2487 6.75126 27.125 14 27.125C21.2487 27.125 27.125 21.2487 27.125 14C27.125 6.75126 21.2487 0.875 14 0.875ZM0 14C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14Z"
          fill={color}
          fill-opacity="0.8"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.3717 9.91675C13.4861 9.91675 13.6003 9.96105 13.6873 10.0496C13.8607 10.2268 13.8607 10.5131 13.6861 10.6891L11.7041 12.6922L11.6583 12.7326C11.4833 12.8674 11.2335 12.8534 11.0745 12.691C10.9878 12.6023 10.9444 12.4872 10.9444 12.3721C10.9444 12.2557 10.9878 12.14 11.0757 12.0514L13.0571 10.0484L13.1029 10.0081C13.1822 9.94717 13.277 9.91675 13.3717 9.91675ZM9.77847 13.5479H18.6876L18.7434 13.5515C18.963 13.5793 19.133 13.7696 19.133 14C19.133 14.2496 18.9335 14.4521 18.6876 14.4521H10.8571L13.686 17.311L13.726 17.3572C13.8594 17.534 13.8462 17.7881 13.6872 17.9506C13.5138 18.1272 13.2316 18.1278 13.0576 17.9518L9.46427 14.3201L9.42464 14.2746C9.36437 14.1951 9.33301 14.0979 9.33301 14C9.33301 13.9415 9.34427 13.883 9.36687 13.8276C9.43574 13.6582 9.59788 13.5479 9.77847 13.5479Z"
          fill={color}
          fill-opacity="0.8"
        />
      </svg>
    </span>
  );
};
