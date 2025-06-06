"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, Search, Sparkles, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
    return (
        <div className="min-h-full bg-gradient-to-br from-purple-50 via-white to-yellow-50 flex items-center justify-center p-4">
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-8">
                    {/* Logo */}
                    <div className="flex items-center justify-center space-x-2 mb-8">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-yellow-400 rounded-full flex items-center justify-center">
                            <Sparkles className="w-7 h-7 text-white" />
                        </div>
                        <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-yellow-500 bg-clip-text text-transparent">
                            Estética Nallely
                        </span>
                    </div>

                    {/* 404 Number */}
                    <div className="mb-8">
                        <h1 className="text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-purple-600 via-purple-700 to-yellow-500 bg-clip-text text-transparent leading-none">
                            404
                        </h1>
                    </div>
                </div>

                <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-8 md:p-12 text-center">
                        <div className="mb-8">
                            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-purple-100 to-yellow-100 rounded-full flex items-center justify-center">
                                <Search className="w-12 h-12 text-purple-600" />
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">¡Oops! Página no encontrada</h2>

                            <p className="text-xl text-gray-600 mb-2 max-w-2xl mx-auto leading-relaxed">
                                La página que buscas no existe o ha sido movida.
                            </p>

                            <p className="text-lg text-gray-500 mb-8 max-w-xl mx-auto">
                                Pero no te preocupes, puedes regresar a nuestro inicio y descubrir todos nuestros servicios de belleza y
                                cuidado.
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                            <Link href="/">
                                <Button
                                    size="lg"
                                    className="bg-gradient-to-r from-purple-600 to-yellow-500 hover:from-purple-700 hover:to-yellow-600 text-white px-8 py-4 text-lg"
                                >
                                    <Home className="w-5 h-5 mr-2" />
                                    Ir al Inicio
                                </Button>
                            </Link>

                            <Button
                                size="lg"
                                variant="outline"
                                onClick={() => window.history.back()}
                                className="border-purple-200 text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg"
                            >
                                <ArrowLeft className="w-5 h-5 mr-2" />
                                Página Anterior
                            </Button>
                        </div>

                        {/* Quick Links */}
                        <div className="border-t border-gray-200 pt-8">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Enlaces Rápidos</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <Link
                                    href="/#servicios"
                                    className="text-purple-600 hover:text-purple-800 transition-colors text-sm font-medium"
                                >
                                    Nuestros Servicios
                                </Link>
                                <Link
                                    href="/#cotizador"
                                    className="text-purple-600 hover:text-purple-800 transition-colors text-sm font-medium"
                                >
                                    Cotizador
                                </Link>
                                <Link
                                    href="/#seguimiento"
                                    className="text-purple-600 hover:text-purple-800 transition-colors text-sm font-medium"
                                >
                                    Seguimiento de Citas
                                </Link>
                                <Link
                                    href="/#contacto"
                                    className="text-purple-600 hover:text-purple-800 transition-colors text-sm font-medium"
                                >
                                    Contacto
                                </Link>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Decorative Elements */}
                <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-400 to-yellow-400 rounded-full opacity-20 blur-xl"></div>
                <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-yellow-400 to-purple-400 rounded-full opacity-20 blur-xl"></div>
                <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-purple-300 to-yellow-300 rounded-full opacity-10 blur-lg"></div>
            </div>
        </div>
    )
}
