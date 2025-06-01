"use client"

import { useState, useEffect } from "react"
import { AlertTriangle, RefreshCw, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"

export default function MaintenancePage() {
    const [isRetrying, setIsRetrying] = useState(false)
    const [timeLeft, setTimeLeft] = useState(30) // 30 segundos para el próximo intento
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime <= 1) {
                    // Tiempo agotado, recargar la página
                    window.location.reload()
                    return 0
                }
                return prevTime - 1
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    useEffect(() => {
        // Calcular el progreso basado en el tiempo restante
        const progressValue = ((30 - timeLeft) / 30) * 100
        setProgress(progressValue)
    }, [timeLeft])

    const handleRetry = async () => {
        setIsRetrying(true)
        // Simular intento de reconexión
        await new Promise((resolve) => setTimeout(resolve, 1000))
        setIsRetrying(false)
        // Recargar la página
        window.location.reload()
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
            <div className="w-full max-w-md space-y-6">
                {/* Tarjeta principal */}
                <Card>
                    <CardHeader className="text-center">
                        <CardTitle className="text-xl text-gray-800">
                            <div className="mx-auto w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-4">
                                <AlertTriangle className="w-10 h-10 text-red-600" />
                            </div>
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">Servicio No Disponible</h1>
                        </CardTitle>
                        <CardDescription className="text-gray-600 text-md">
                            Estamos experimentando problemas técnicos temporales
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {/* Estado del servicio */}
                        <div className="text-center">
                            <div className="text-xl text-gray-800 font-semibold">¿Qué está pasando?</div>
                            <span className="text-sm text-gray-500">Nuestros servidores no están respondiendo en este momento.</span>
                        </div>

                        <Alert className="bg-yellow-50 border border-yellow-200 p-4 mb-6">
                            <Clock className="h-4 w-4" />
                            <AlertDescription>
                                <strong>Tiempo estimado de resolución:</strong> 15-30 minutos
                                <span className="block mt-1">Nuestro equipo técnico ya está trabajando para resolver el problema.</span>
                            </AlertDescription>
                        </Alert>

                        {/* Barra de progreso y countdown */}
                        <div className="space-y-3">
                            <div className="text-center">
                                <div className="text-sm font-medium text-gray-700 mb-2">
                                    Próximo intento automático en: <span className="font-bold text-blue-600">{timeLeft}s</span>
                                </div>
                                <Progress value={progress} className="w-full h-2 [&>div]:bg-blue-700" />
                            </div>
                        </div>

                        {/* Botón de reintentar manual */}
                        <Button
                            onClick={handleRetry}
                            disabled={isRetrying}
                            className="w-full bg-blue-700 hover:bg-blue-700/90 cursor-pointer"
                            size="lg"
                        >
                            {isRetrying ? (
                                <>
                                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                                    Reintentando...
                                </>
                            ) : (
                                <>
                                    <RefreshCw className="mr-2 h-4 w-4" />
                                    Reintentar Ahora
                                </>
                            )}
                        </Button>

                        {/* Información adicional */}
                        <div className="text-center text-xs text-gray-500">
                            La página se recarga automáticamente cada 30 segundos
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
