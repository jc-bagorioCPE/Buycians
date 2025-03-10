export const TypographyH1 = ({ children, className = "" }) => (
    <h1 className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ${className}`}>
      {children}
    </h1>
  )
  
  export const TypographyP = ({ children, className = "" }) => (
    <p className={`leading-7 ${className}`}>
      {children}
    </p>
  )
  