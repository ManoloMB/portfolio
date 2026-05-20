export const getIcon = (iconName) => {
  const iconSize = "w-8 h-8";
  const strokeWidth = "2";

  const icons = {
    brain: (
      <svg className={iconSize} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={strokeWidth}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5a4 4 0 100-8 4 4 0 000 8z" />
      </svg>
    ),
    database: (
      <svg className={iconSize} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={strokeWidth}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375M12 9.75v.75m0 2.25v.75m0 2.25v.75m0 2.25v.75" />
      </svg>
    ),
    cog: (
      <svg className={iconSize} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={strokeWidth}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.592c.55 0 1.02.398 1.11.94a6.059 6.059 0 01.93 3.519v.262a6.004 6.004 0 01-.553 2.373c-.309.838-.856 1.561-1.561 2.066a5.994 5.994 0 01-2.517 1.142 6.067 6.067 0 01-2.855 0 5.994 5.994 0 01-2.517-1.142 5.89 5.89 0 01-1.561-2.066 6.004 6.004 0 01-.553-2.373v-.262a6.059 6.059 0 01.93-3.519 2.218 2.218 0 011.11-.94h2.592m5.856 0a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm6 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    ),
    palette: (
      <svg className={iconSize} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={strokeWidth}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 002.252 2.764h10.604a2.25 2.25 0 002.262-2.155 9 9 0 10-17.464 0c.674 2.212 2.4 4.08 4.718 5.04M5.251 10.861a3.042 3.042 0 015.163.585c.35.62.827 1.402 1.456 2.394.63.992 1.645 2.03 3.032 2.642.388.16.802.219 1.214.201a2.25 2.25 0 012.205 2.066 2.25 2.25 0 01-2.26 2.251h-.5a2.25 2.25 0 01-2.25-2.25v-.915c0-.592-.291-1.148-.804-1.465m8.716-5.882a1.5 1.5 0 00-1.153-2.338 1.5 1.5 0 00-1.153 2.338m6 0a1.5 1.5 0 00-1.153-2.338 1.5 1.5 0 00-1.153 2.338" />
      </svg>
    ),
    chart: (
      <svg className={iconSize} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={strokeWidth}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 6.75c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v13.5c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V6.75zm6-6c-.621 0-1.125.504-1.125 1.125v19.5c0 .621.504 1.125 1.125 1.125h2.25a1.125 1.125 0 001.125-1.125V1.125A1.125 1.125 0 0018 0h-2.25z" />
      </svg>
    ),
    container: (
      <svg className={iconSize} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={strokeWidth}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375M12 9.75v.75m0 2.25v.75m0 2.25v.75m0 2.25v.75" />
      </svg>
    ),
    briefcase: (
      <svg className={iconSize} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={strokeWidth}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H2.25c-.621 0-1.125.504-1.125 1.125v1.625c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    cpu: (
      <svg className={iconSize} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={strokeWidth}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2.25M15 3v2.25M9 9h.008v.008H9V9zm0 2.25h.008v.008H9V11.25zm0 2.25h.008v.008H9V13.5zm0 2.25h.008v.008H9V15.75zm6-6h.008v.008h-.008V9zm0 2.25h.008v.008h-.008V11.25zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008V15.75M12 3a9 9 0 100 18 9 9 0 000-18z" />
      </svg>
    ),
    folder: (
      <svg className={iconSize} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={strokeWidth}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12a8.25 8.25 0 1116.5 0 8.25 8.25 0 01-16.5 0zM9.75 9.75h4.5m0 0h4.5m-4.5 0v4.5m0-4.5v4.5" />
      </svg>
    ),
    tools: (
      <svg className={iconSize} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={strokeWidth}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.817l2.614 2.614a2.25 2.25 0 002.625.371l5.508-5.508a2.25 2.25 0 00-3.182-3.182l-5.507 5.508a2.25 2.25 0 01-.372 2.625zM9 13.5a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  };

  return icons[iconName] || icons.cog;
};
