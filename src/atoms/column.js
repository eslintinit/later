export const Column = ({
  next = false,
  now = false,
  done = false,
  style = {},
  children,
}) => (
  <div
    className={`column
      ${next ? 'next' : ''}
      ${now ? 'now' : ''}
      ${done ? 'done' : ''}
    `}
    style={style}
  >
    {children}
  </div>
)
