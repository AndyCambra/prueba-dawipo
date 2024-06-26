from flask import Flask
from ia.routes.shipment_routes import shipment_bp

# Crea una instancia de la aplicación Flask.
app = Flask(__name__)

# Registra el blueprint de rutas de productos.
app.register_blueprint(shipment_bp)

# Ejecuta la aplicación Flask en el host y puerto especificados.
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
