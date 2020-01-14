import pandas as pd
import numpy as np
import random

df = pd.read_csv('db.csv')

df.drop(columns=['Invoice ID', 'Branch', 'City', 'Customer type', 'Gender',\
                'Tax 5%', 'Payment', 'cogs', 'gross margin percentage',\
                'gross income', 'Rating', 'Total'], inplace=True)

df['transacciones'] = df.index

df.rename(columns={'Product line': 'Categoria', 'Unit price':'Precio',\
                   'Quantity': 'Cantidad', 'Date': 'Fecha', 'Time':'Hora',\
                   }, inplace=True)

columnas = ['Fecha', 'Hora', 'transacciones', 'Categoria',\
           'Precio', 'Cantidad']

df = df[columnas]

df['Total'] = df['Precio'] * df['Cantidad']

health_and_beauty = ['aftershave', 'cera', 'rastrillo', 'talco', 'desodorante',\
                     'pasta dental', 'crema', 'esponja', 'jabon exfoliante',\
                     'shampoo', 'acondicionador', 'desmaquillante', 'blush',\
                     'polvo traslucido', 'base', 'aceite corporal', 'gel',\
                     'spray', 'pinzas', 'sales']

electronic = ['xbox', 'playstation', 'wi', 'pantalla', 'video proyector',\
              'blu-ray', 'soundbar', 'home theater', 'laptop', 'monitor',\
              'mouse', 'microfono', 'teclado', 'celular', 'audifonos',\
              'auxiliar', 'hdmi', 'cable fibra optica', 'pilas', 'modem',\
              'repetidor', 'despertador', 'ipad', 'tablet', 'google home',\
              'alexa', 'chrome cast', 'apple tv', 'cargador', 'extension',\
              'radio', 'airpods', 'mouse pad', 'oculus rift', 'usb']

home_and_life = ['lavadora', 'secadora', 'plancha', 'mesa', 'silla',\
                 'aspiradora', 'abre corchos', 'refrigerador', 'ollas',\
                 'cubiertos', 'tapete', 'tostador', 'cubiertos', 'cuchillos',\
                 'horno', 'toallero', 'copas', 'vasos', 'tetera', 'alfombra',\
                 'cafetera', 'gaveta', 'toalla', 'bolsa', 'maleta', 'bascuala']

sports = ['tienda de campaña', 'silla de acampar', 'bolsa de esqui', 'mochila',\
          'pesa rusa', 'tapete yoga', 'arrow grip', 'rodillo de espuma',\
          'asas', 'set voleyball', 'set de pesas', 'tapete para ejercicio',\
          'paracaidas entrenador', 'chaleco de peso', 'rueda abdominal',\
          'balon medicinal', 'pull up bar', 'escalera agilidad',\
          'porteria', 'hamaca de camping', 'lona de camping', 'raqueta',\
          'sleeping', 'set herradura', 'cuerda de entrenamiento']

food = ['ginebra', 'coctel de frutas', 'mayonesa', 'cafe', 'arroz', 'mate',\
        'whisky', 'vinagre', 'endulzante', 'nueces', 'licor de manzana',\
        'coca cola', 'cerveza', 'piña', 'te verde', 'miel de fruta',\
        'tequila', 'almendra entera', 'cacahuates', 'leche', 'harina',\
        'galletas', 'harina de coco', 'jugo verde', 'pasta', 'chilorio',\
        'vodka', 'mermelada', 'jugo sazonador', 'frijoles', 'aceite cocina']

fashion = ['removedor de espinillas', 'cosmetiquera', 'bolsa de aseo',\
           'lampara led', 'organizador de maquillaje', 'mascara facial',\
           'diademas', 'manicure personal', 'estuche de belleza',\
           'set de baño', 'bolsa organizadora', 'peluca', 'depiladora',\
           'lifting', 'pop-up sheets', 'paño de algodon', 'bandas cabeza']

categorics = {'Health and beauty': health_and_beauty,\
              'Electronic accessories': electronic,\
              'Home and lifestyle': home_and_life,\
              'Sports and travel': sports,\
              'Food and beverages': food,\
              'Fashion accessories': fashion}

new = df.copy()
lista =[]
for i in new['Categoria']:
    if i in categorics.keys():
         lista.append(random.choice(categorics[i]))

new['Productos'] = lista

new['Fecha'] = new['Fecha'].astype('datetime64[ns]')
new['Hora'] = new['Hora'].astype('datetime64[ns]')
new['Hora'] = new['Hora'].dt.hour
new['Dia'] = new['Fecha'].dt.day_name()



sales_per_hour = new['Hora'].value_counts()
sales_per_day = new['Dia'].value_counts()
