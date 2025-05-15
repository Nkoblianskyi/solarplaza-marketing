import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // This would be where you'd integrate with a real email service
    // or database to store the contact request
    console.log("Contact form submission:", data)

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({
      success: true,
      message: "Mensaje recibido correctamente",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Ha ocurrido un error al procesar tu solicitud",
      },
      { status: 500 },
    )
  }
}
