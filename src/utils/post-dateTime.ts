import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export function fulldateTime(dateTime: string): string {
  const date = new Date(dateTime);

  return format(date, "dd/MM/yyyy 'ás' HH'h'mm", {
    locale: ptBR,
  });
}

export function formatRelativeDate(dateTime: string): string {
  const date = new Date(dateTime);

  return formatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true,
  });
}
