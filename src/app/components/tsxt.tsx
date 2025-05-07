const words = ["این یک متن نمونه است", "کلمات مهم باید بولد شوند", "جاوااسکریپت و ریاکت"];
const boldKeywords = ["مهم", "جاوااسکریپت", "ریاکت"];

export default function MyListss() {
  return (
    <ul className="list-disc pr-4">
      {words.map((item, index) => {
        const parts = item.split(new RegExp(`(${boldKeywords.join('|')})`, 'g'));
        return (
          <li key={index} className="mb-2">
            {parts.map((part, i) =>
              boldKeywords.includes(part) ? (
                <span key={i} className="font-bold text-blue-600">{part}</span>
              ) : (
                part
              )
            )}
          </li>
        );
      })}
    </ul>
  );
}