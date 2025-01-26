interface Props {
  error: boolean;
}

const ErrorMessage = ({ error }: Props) => {
  if (!error) return null;

  return <p className="input-error">This field is required!</p>;
};

export default ErrorMessage;
