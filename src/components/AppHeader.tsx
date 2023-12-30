import React from "react";
import "./AppHeader.css";

interface ThemeChange {
  theme: "light" | "dark";
  themeToggle: () => void;
}

const AppHeader: React.FC<ThemeChange> = ({ theme, themeToggle }) => {
  return (
    <div className="header">
      <h1 className="header-name">devfinder</h1>
      <div className="theme-name-icon" onClick={themeToggle}>
        <span className="theme-name">
          {theme === "light" ? "Dark" : "Light"}
        </span>
        {theme === 'light' ? <DarkThemeIcon /> : <LightThemeIcon />}
      </div>
    </div>
  );
};

const LightThemeIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M13.5451 6.45502C12.6456 5.55555 11.3757 4.97354 10.0001 4.97354C8.62443 4.97354 7.35459 5.5291 6.45511 6.45502C5.55564 7.35449 4.97363 8.62433 4.97363 10C4.97363 11.3757 5.55564 12.6455 6.45511 13.545C7.35459 14.4444 8.62443 15.0265 10.0001 15.0265C11.3757 15.0265 12.6456 14.4709 13.5451 13.545C14.4445 12.6455 15.0265 11.3757 15.0265 10C15.0265 8.62433 14.471 7.35449 13.5451 6.45502Z" fill="white"/>
  <path d="M10.0001 3.4127C10.3705 3.4127 10.6879 3.09524 10.6879 2.72487V0.687831C10.6879 0.31746 10.3705 0 10.0001 0C9.62972 0 9.31226 0.31746 9.31226 0.687831V2.72487C9.31226 3.09524 9.62972 3.4127 10.0001 3.4127Z" fill="white"/>
  <path d="M15.6349 5.34392L17.09 3.88889C17.3545 3.62434 17.3545 3.20106 17.09 2.93651C16.8254 2.67196 16.4021 2.67196 16.1376 2.93651L14.6825 4.39154C14.418 4.65609 14.418 5.07937 14.6825 5.34392C14.9206 5.60847 15.3439 5.60847 15.6349 5.34392Z" fill="white"/>
  <path d="M19.3123 9.31216H17.2752C16.9049 9.31216 16.5874 9.62962 16.5874 9.99999C16.5874 10.3704 16.9049 10.6878 17.2752 10.6878H19.3123C19.6826 10.6878 20.0001 10.3704 20.0001 9.99999C20.0001 9.62962 19.6826 9.31216 19.3123 9.31216Z" fill="white"/>
  <path d="M15.6086 14.6561C15.344 14.3915 14.9207 14.3915 14.6562 14.6561C14.3916 14.9206 14.3916 15.3439 14.6562 15.6085L16.1112 17.0635C16.3758 17.328 16.799 17.328 17.0636 17.0635C17.3281 16.7989 17.3281 16.3757 17.0636 16.1111L15.6086 14.6561Z" fill="white"/>
  <path d="M10.0001 16.5873C9.62972 16.5873 9.31226 16.9048 9.31226 17.2751V19.3122C9.31226 19.6825 9.62972 20 10.0001 20C10.3705 20 10.6879 19.6825 10.6879 19.3122V17.2751C10.6879 16.9048 10.3705 16.5873 10.0001 16.5873Z" fill="white"/>
  <path d="M4.36511 14.6561L2.91008 16.1111C2.64553 16.3757 2.64553 16.7989 2.91008 17.0635C3.17463 17.328 3.59791 17.328 3.86246 17.0635L5.31749 15.6085C5.58204 15.3439 5.58204 14.9206 5.31749 14.6561C5.07939 14.3915 4.65611 14.3915 4.36511 14.6561Z" fill="white"/>
  <path d="M3.4127 9.99999C3.4127 9.62962 3.09524 9.31216 2.72487 9.31216H0.687831C0.31746 9.31216 0 9.62962 0 9.99999C0 10.3704 0.31746 10.6878 0.687831 10.6878H2.72487C3.09524 10.6878 3.4127 10.3704 3.4127 9.99999Z" fill="white"/>
  <path d="M4.36511 5.34392C4.62966 5.60847 5.05294 5.60847 5.31749 5.34392C5.58204 5.07937 5.58204 4.65609 5.31749 4.39154L3.86246 2.93651C3.59791 2.67196 3.17463 2.67196 2.91008 2.93651C2.64553 3.20106 2.64553 3.62434 2.91008 3.88889L4.36511 5.34392Z" fill="white"/>
</svg>
);

const DarkThemeIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M19.5133 11.3967C19.3087 11.3453 19.1041 11.3966 18.9251 11.5251C18.2602 12.0901 17.4929 12.5523 16.649 12.8605C15.8562 13.1687 14.9866 13.3228 14.066 13.3228C11.9944 13.3228 10.1019 12.4753 8.74647 11.1142C7.39102 9.75303 6.54707 7.85258 6.54707 5.77237C6.54707 4.89919 6.70051 4.0517 6.95626 3.28125C7.23758 2.45944 7.64677 1.71467 8.18383 1.07263C8.414 0.790132 8.36285 0.379226 8.08153 0.148091C7.90251 0.0196826 7.69792 -0.0316807 7.49332 0.0196826C5.31949 0.61036 3.42698 1.92012 2.07153 3.66648C0.767234 5.38715 0 7.51872 0 9.83007C0 12.6294 1.12528 15.1719 2.96664 17.0209C4.808 18.87 7.3143 20 10.1275 20C12.4803 20 14.6542 19.1782 16.3932 17.8171C18.1579 16.4303 19.4366 14.4528 19.9737 12.1928C20.076 11.8332 19.8714 11.4737 19.5133 11.3967Z" fill="#697C9A"/>
</svg>
);

export default AppHeader;
