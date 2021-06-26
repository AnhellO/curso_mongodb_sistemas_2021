import pymongo
import random
from faker import Faker

fake = Faker()

def generate_alumno():
    data = {
        'matricula': fake.unique.random_number(digits=10, fix_len=True),
        'edad': random.randint(18,30),
        'sexo': random.choice(['F', 'M']),
        'email': fake.unique.email(domain="uadec.edu.mx"),
        'carrera': random.choice(['ISC', 'ITIC', 'IA', 'IEC', 'IIS']),
        'domicilio': {
            'calle': fake.street_name(),
            'numero': fake.building_number(),
            'ciudad': fake.city(),
            'pais': fake.country()
        }
    }
    
    if data['sexo'] == 'F':
        data['nombre'] = fake.first_name_female()
    else:
        data['nombre'] = fake.first_name_male()
    
    return data

def main():
    _db = input("Ingresa la base de datos a utilizar: ")
    _colection = input("Ingresa la colección a utilizar: ")
    _num = int(input("Ingresa el número de registros a generar: "))
    client = pymongo.MongoClient("localhost", 27017)
    db = client[_db]
    items = []
    
    if _colection == 'alumnos':
        items = [generate_alumno() for i in range(0, _num)]
    
    result = db[_colection].insert_many(items)
    print(result)

if __name__ == "__main__":     
    main()