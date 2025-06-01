import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Heart, Zap } from "lucide-react"

const services = [
    {
        icon: <Sparkles className="h-12 w-12 text-yellow-500" />,
        title: "Tratamientos Faciales",
        description: "Limpieza profunda, hidratación y rejuvenecimiento facial con productos premium",
        price: "Desde $800",
    },
    {
        icon: <Heart className="h-12 w-12 text-purple-500" />,
        title: "Cuidado Corporal",
        description: "Masajes relajantes, exfoliación y tratamientos reductivos",
        price: "Desde $1,200",
    },
    {
        icon: <Zap className="h-12 w-12 text-yellow-500" />,
        title: "Depilación Láser",
        description: "Tecnología de última generación para resultados duraderos",
        price: "Desde $500",
    },
    {
        icon: <Sparkles className="h-12 w-12 text-purple-500" />,
        title: "Microblading",
        description: "Cejas perfectas con técnica de micropigmentación",
        price: "Desde $2,500",
    },
    {
        icon: <Heart className="h-12 w-12 text-yellow-500" />,
        title: "Pestañas",
        description: "Extensiones y lifting de pestañas para una mirada impactante",
        price: "Desde $600",
    },
    {
        icon: <Zap className="h-12 w-12 text-purple-500" />,
        title: "Manicure & Pedicure",
        description: "Cuidado completo de manos y pies con esmaltado semipermanente",
        price: "Desde $400",
    },
]

export default function Services() {
    return (
        <section id="servicios" className="py-20 bg-gradient-to-b from-white to-purple-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                        <span className="text-yellow-600">
                            Nuestros Servicios
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Ofrecemos una amplia gama de servicios de belleza y cuidado personal con los más altos estándares de calidad
                        y profesionalismo.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Card
                            key={index}
                            className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                        >
                            <CardContent className="p-6 text-center">
                                <div className="mb-4 flex justify-center">{service.icon}</div>
                                <h4 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h4>
                                <p className="text-gray-600 mb-4">{service.description}</p>
                                <p className="text-lg font-bold bg-gradient-to-r from-purple-600 to-yellow-500 bg-clip-text text-transparent">
                                    {service.price}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
