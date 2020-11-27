export const Row = ({
  children,
  done = false,
  errand = {},
  onClick = () => {},
}) => (
  <div className="row" onClick={() => onClick(errand.id)}>
    <div className={`box ${done ? 'done' : ''}`} />
    {children}
  </div>
)
