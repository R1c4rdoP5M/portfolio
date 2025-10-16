import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Music, Utensils, Trophy, Book, Gamepad2 } from "lucide-react";

const Favourites = () => {
  const favouriteCategories = [
    {
      icon: <Utensils className="w-6 h-6" />,
      title: "Favourite Foods",
      items: ["Pizza", "Sushi", "Tacos", "Ice Cream", "Burgers"],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Sports & Activities",
      items: ["Volleyball", "Swimming", "Cycling", "Hiking", "Yoga"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Music className="w-6 h-6" />,
      title: "Music Genres",
      items: ["Electronic", "Rock", "Jazz", "Lo-fi", "Classical"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Book className="w-6 h-6" />,
      title: "Books & Reading",
      items: ["Sci-Fi Novels", "Tech Books", "Biographies", "Philosophy", "Comics"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Gamepad2 className="w-6 h-6" />,
      title: "Gaming",
      items: ["Strategy Games", "RPGs", "Puzzle Games", "Indie Games", "Multiplayer"],
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Hobbies",
      items: ["Photography", "Traveling", "Cooking", "Coding", "Learning Languages"],
      color: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section id="favourites" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Favourites</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Things I love and enjoy in my free time
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favouriteCategories.map((category, index) => (
            <Card key={index} className="card-glow border-border bg-card overflow-hidden">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center text-white mb-2`}>
                  {category.icon}
                </div>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <span className="text-primary">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Favourites;
