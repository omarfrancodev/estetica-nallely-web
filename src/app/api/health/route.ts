import { NextResponse } from "next/server";

export async function GET() {
    try {
        // Aquí podrías hacer una verificación real de tu servicio
        // Por ejemplo, comprobar la conexión a la base de datos, etc.
        // Para este ejemplo, simplemente devolvemos un 200 OK
        // throw new Error('Simulated error'); // Simulación de error para probar el manejo de errores

        return NextResponse.json({ ok: 'ok' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}