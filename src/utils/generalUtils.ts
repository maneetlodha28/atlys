export const getEmoji = (name: string) => {
  switch (name) {
    case "like":
      return "👍";
    case "dislike":
      return "👎";
    case "happy":
      return "😊";
    case "sad":
      return "😢";
    case "love":
      return "❤️";
    case "excitement":
      return "🔥";
    case "applause":
      return "👏";
    case "thinking":
      return "🤔";
    case "warning":
      return "⚠️";
    case "idea":
      return "💡";
    case "achievement":
      return "⭐";
    case "celebration":
      return "🎉";
    case "success":
      return "✔️";
    case "failure":
      return "❌";
    case "indifferent":
      return "😐";
    case "confusion":
      return "❓";
    case "emphasis":
      return "❗";
    case "handRaised":
      return "✋";
    case "progress":
      return "🚀";
    case "search":
      return "🔍";
    default:
      return "👋"; // Default case with "hello" emoji
  }
};
