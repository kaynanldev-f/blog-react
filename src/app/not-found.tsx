import ErrorMEssage from "../components/ErrorMessage/ErrorMessage";

export default function NotFound() {
  return (
    <ErrorMEssage
      titleContent="404"
      content="Erro 404 - Essa página não existe"
    />
  );
}
