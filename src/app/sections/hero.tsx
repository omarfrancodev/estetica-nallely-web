import { Button } from "@/components/ui/button"
import { Star, Calendar, Users } from "lucide-react"
import Image from "next/image"

export default function Hero() {
    return (
        <section id="inicio" className="pt-4 lg:pt-20 pb-16 bg-gradient-to-br from-purple-50 via-white to-yellow-50">
            <div className="container mx-auto px-4 lg:px-6 py-4 lg:py-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                                <span className="text-purple-700 bg-clip-text">
                                    Belleza y Cuidado
                                    <br />
                                    Para Todos</span>
                            </h1>
                            <p className="text-xl text-gray-700 leading-relaxed">
                                Descubre tu mejor versión en nuestro centro de estética unisex. Tratamientos profesionales con la más
                                alta calidad y tecnología de vanguardia.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                size="lg"
                                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg cursor-pointer"
                            >
                                <Calendar className="w-5 h-5 mr-2" />
                                Reservar Cita
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="bg-white border-yellow-300 text-yellow-600 hover:bg-yellow-100 hover:text-gray-700 cursor-pointer px-8 py-4 text-lg"
                            >
                                <a href="#servicios">
                                    Ver Servicios
                                </a>
                            </Button>
                        </div>

                        <div className="flex items-center space-x-8 pt-8">
                            <div className="flex items-center space-x-2">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <span className="text-gray-600">4.9/5 estrellas</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Users className="w-5 h-5 text-purple-600" />
                                <span className="text-gray-600">+1000 clientes satisfechos</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-yellow-400 rounded-3xl blur-3xl opacity-20"></div>
                        <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                            <Image
                                src="/placeholder.svg"
                                width={400}
                                height={500}
                                alt="Estética moderna y elegante"
                                className="w-full h-96 object-cover rounded-2xl"
                            />
                            <div className="absolute -bottom-4 -right-2 bg-yellow-500 text-white p-4 rounded-2xl shadow-lg">
                                <div className="text-center">
                                    <div className="text-2xl font-bold">15+</div>
                                    <div className="text-md">Años de experiencia</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
