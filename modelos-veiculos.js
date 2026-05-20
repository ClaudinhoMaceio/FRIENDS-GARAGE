/* Catálogo marca → modelo → versões (Brasil) */
const CATALOGO_VEICULOS = {
    'Volkswagen': {
        'Gol': ['1.0', '1.6 MSI', '1.6 AF', 'Trendline 1.0', 'Comfortline 1.6'],
        'Polo': ['1.0', '1.6 MSI', '1.6 TSI', 'GTI 2.0', 'Track 1.0'],
        'Virtus': ['1.0 TSI', '1.6 MSI', 'Comfortline 1.0', 'Highline 1.0 TSI'],
        'T-Cross': ['1.0 TSI', '1.4 TSI', 'Sense 1.0', 'Highline 1.4'],
        'Nivus': ['1.0 TSI', 'Comfortline 1.0', 'Highline 1.0 TSI'],
        'Taos': ['1.4 TSI', 'Highline 1.4'],
        'Golf': ['1.4 TSI', 'GTI 2.0', 'Comfortline 1.4', 'Highline 2.0'],
        'Jetta': ['2.0 TSI', 'Comfortline 2.0', 'Highline 2.0'],
        'Amarok': ['2.0 TDI', '3.0 V6 TDI', 'Highline 3.0'],
        'Saveiro': ['1.6', 'Cross 1.6', 'Robust 1.6'],
        'Fox': ['1.0', '1.6', 'BlueMotion 1.0'],
        'Up!': ['1.0', 'move 1.0', 'high up! 1.0'],
        'Tiguan': ['2.0 TSI', 'Allspace 2.0']
    },
    'Fiat': {
        'Uno': ['1.0', '1.4', 'Way 1.0', 'Attractive 1.0'],
        'Mobi': ['1.0', 'Like 1.0', 'Trekking 1.0'],
        'Argo': ['1.0', '1.3', 'Drive 1.0', 'Precision 1.3'],
        'Cronos': ['1.3', 'Drive 1.3', 'Precision 1.3'],
        'Pulse': ['1.0 Turbo', 'Drive 1.0', 'Audace 1.0 Turbo'],
        'Fastback': ['1.0 Turbo', 'Audace 1.0 Turbo', 'Impetus 1.0 Turbo'],
        'Toro': ['1.8 E.Torq', '2.0 Diesel', 'Endurance 1.8', 'Ranch 2.0 Diesel'],
        'Strada': ['1.3', '1.4', 'Freedom 1.3', 'Ultra 1.4'],
        'Palio': ['1.0', '1.4', 'Fire 1.0'],
        'Siena': ['1.0', '1.4', 'EL 1.4'],
        'Fiorino': ['1.4', 'Endurance 1.4']
    },
    'Chevrolet': {
        'Onix': ['1.0', '1.0 Turbo', 'LT 1.0', 'Premier 1.0 Turbo'],
        'Onix Plus': ['1.0 Turbo', 'LTZ 1.0 Turbo', 'Premier 1.0 Turbo'],
        'Prisma': ['1.4', 'LT 1.4', 'LTZ 1.4'],
        'Cruze': ['1.4 Turbo', 'LT 1.4', 'Premier 1.4 Turbo'],
        'Tracker': ['1.0 Turbo', '1.2 Turbo', 'LT 1.0', 'Premier 1.2 Turbo'],
        'Spin': ['1.8', 'LT 1.8', 'Premier 1.8'],
        'S10': ['2.5 Flex', '2.8 Diesel', 'High Country 2.8'],
        'Montana': ['1.2 Turbo', 'Premier 1.2 Turbo'],
        'Cobalt': ['1.8', 'LTZ 1.8'],
        'Equinox': ['2.0 Turbo', 'Premier 2.0']
    },
    'Ford': {
        'Ka': ['1.0', '1.5', 'SE 1.0', 'SEL 1.5'],
        'Fiesta': ['1.6', 'SE 1.6', 'Titanium 1.6'],
        'Focus': ['2.0', 'SE 2.0', 'Titanium 2.0'],
        'EcoSport': ['1.5', '2.0', 'Freestyle 1.5', 'Titanium 2.0'],
        'Ranger': ['2.2 Diesel', '3.2 Diesel', '2.0 Bi-Turbo', 'XLS 3.2'],
        'Territory': ['1.5 Turbo', 'Titanium 1.5 Turbo'],
        'Bronco Sport': ['1.5 Turbo', 'Wildtrak 1.5 Turbo'],
        'Fusion': ['2.0', 'Titanium 2.0'],
        'Edge': ['2.0 Turbo', 'V6 3.5']
    },
    'Toyota': {
        'Corolla': ['2.0', 'XEi 2.0', 'Altis 2.0', 'GR-Sport 2.0'],
        'Corolla Cross': ['2.0', 'XRE 2.0', 'XRX 2.0', 'Hybrid'],
        'Yaris': ['1.5', 'XL 1.5', 'XLS 1.5'],
        'Hilux': ['2.7', '2.8 Diesel', 'SRX 2.8', 'SRV 2.8 Diesel'],
        'SW4': ['2.8 Diesel', 'SRX 2.8', 'Diamond 2.8'],
        'Etios': ['1.5', 'X 1.5', 'Platinum 1.5'],
        'RAV4': ['2.5', 'Hybrid', 'Limited 2.5'],
        'Camry': ['2.5', 'Hybrid 2.5']
    },
    'Honda': {
        'Civic': ['2.0', 'Touring 1.5 Turbo', 'EXL 2.0', 'Si 1.5 Turbo'],
        'City': ['1.5', 'EX 1.5', 'Touring 1.5'],
        'HR-V': ['1.5', 'EX 1.5', 'Advance 1.5', 'Touring 1.5'],
        'WR-V': ['1.5', 'EX 1.5', 'Advance 1.5'],
        'Fit': ['1.5', 'EX 1.5', 'EXL 1.5'],
        'Accord': ['2.0', 'Touring 2.0']
    },
    'Hyundai': {
        'HB20': ['1.0', '1.6', 'Sense 1.0', 'Platinum 1.6'],
        'HB20S': ['1.0 Turbo', '1.6', 'Diamond 1.0 Turbo'],
        'Creta': ['1.0 Turbo', '2.0', 'Pulse 1.0', 'Ultimate 2.0'],
        'Tucson': ['1.6 Turbo', 'GLS 1.6', 'Ultimate 1.6'],
        'ix35': ['2.0', 'GLS 2.0'],
        'Santa Fe': ['2.2 Diesel', 'Calligraphy 2.2']
    },
    'Renault': {
        'Kwid': ['1.0', 'Zen 1.0', 'Intense 1.0'],
        'Sandero': ['1.0', '1.6', 'Stepway 1.6', 'Intense 1.6'],
        'Logan': ['1.0', '1.6', 'Expression 1.6'],
        'Duster': ['1.6', '2.0', 'Intense 1.6', 'Iconic 2.0'],
        'Oroch': ['1.6', '2.0', 'Intense 1.6'],
        'Captur': ['1.6', '2.0', 'Bose 1.6'],
        'Kardian': ['1.0 Turbo', 'Evolution 1.0', 'Premiere 1.0 Turbo']
    },
    'Jeep': {
        'Renegade': ['1.8', '1.3 Turbo', 'Longitude 1.8', 'S 1.3 Turbo'],
        'Compass': ['2.0', '1.3 Turbo', 'Longitude 2.0', 'Limited 1.3 Turbo'],
        'Commander': ['2.0 Turbo', 'Limited 2.0', 'Overland 2.0'],
        'Wrangler': ['2.0 Turbo', 'Rubicon 2.0', 'Sahara 2.0']
    },
    'Nissan': {
        'Kicks': ['1.6', '1.6 Flex', 'Advance 1.6', 'Exclusive 1.6'],
        'Versa': ['1.6', 'Advance 1.6', 'Exclusive 1.6'],
        'Sentra': ['2.0', 'Advance 2.0', 'Exclusive 2.0'],
        'Frontier': ['2.3 Diesel', 'LE 2.3', 'Attack 2.3 Diesel'],
        'March': ['1.0', '1.6', 'SV 1.6']
    },
    'Peugeot': {
        '208': ['1.0', '1.6', 'GT 1.6', 'Allure 1.6'],
        '2008': ['1.6', '1.6 THP', 'Griffe 1.6'],
        '3008': ['1.6 THP', 'Griffe 1.6', 'GT 1.6'],
        '308': ['1.6', 'Allure 1.6', 'GT 1.6'],
        'Partner': ['1.6', 'Escapade 1.6']
    },
    'Citroën': {
        'C3': ['1.0', '1.6', 'Feel 1.0', 'Shine 1.6'],
        'C4 Cactus': ['1.6', 'Feel 1.6', 'Shine 1.6'],
        'Aircross': ['1.6', 'Feel 1.6', 'Shine 1.6'],
        'Jumper': ['2.0 Diesel', 'Furgão 2.0']
    },
    'BMW': {
        'Série 3': ['320i', '330i', 'M340i'],
        'Série 5': ['530i', '540i', 'M550i'],
        'X1': ['sDrive18i', 'xDrive25i'],
        'X3': ['xDrive30i', 'M40i'],
        'X5': ['xDrive40i', 'M50i'],
        '320i': ['2.0 Turbo', 'M Sport 2.0']
    },
    'Mercedes-Benz': {
        'Classe A': ['A200', 'A250', 'AMG A35'],
        'Classe C': ['C180', 'C200', 'C300', 'AMG C43'],
        'Classe E': ['E200', 'E300', 'AMG E53'],
        'GLA': ['200', '250', 'AMG 35'],
        'GLC': ['300', 'AMG 43'],
        'Sprinter': ['311 CDI', '415 CDI', 'Furgão 311']
    },
    'Audi': {
        'A3': ['1.4 TFSI', '2.0 TFSI', 'S3 2.0'],
        'A4': ['2.0 TFSI', 'S4 3.0', 'Performance 2.0'],
        'Q3': ['1.4 TFSI', '2.0 TFSI', 'S line 2.0'],
        'Q5': ['2.0 TFSI', 'S line 2.0', 'SQ5 3.0'],
        'A1': ['1.0 TFSI', '1.4 TFSI']
    },
    'Kia': {
        'Cerato': ['1.6', '2.0', 'SX 2.0'],
        'Sportage': ['2.0', '2.0 Diesel', 'EX 2.0'],
        'Seltos': ['1.6', '2.0', 'EX 1.6', 'SX 2.0'],
        'Carnival': ['3.3 V6', 'EX 3.3'],
        'Picanto': ['1.0', 'EX 1.0']
    },
    'Mitsubishi': {
        'L200': ['2.4 Diesel', 'Triton 2.4', 'HPE 2.4 Diesel'],
        'Outlander': ['2.0', '2.4', 'HPE-S 2.4'],
        'ASX': ['2.0', 'HPE 2.0'],
        'Eclipse Cross': ['1.5 Turbo', 'HPE-S 1.5 Turbo']
    },
    'RAM': {
        'Rampage': ['2.0 Turbo', 'Rebel 2.0', 'Laramie 2.0'],
        '1500': ['5.7 V8', 'Limited 5.7', 'Night Edition 5.7'],
        '2500': ['6.7 Cummins', 'Laramie 6.7']
    },
    'BYD': {
        'Dolphin': ['Mini', 'Plus', 'GS'],
        'Yuan Plus': ['GL', 'GS'],
        'Song Plus': ['GL', 'GS'],
        'Tan': ['GL', 'GS'],
        'King': ['GL', 'GS']
    },
    'Tesla': {
        'Model 3': ['Standard Range', 'Long Range', 'Performance'],
        'Model Y': ['Long Range', 'Performance'],
        'Model S': ['Long Range', 'Plaid']
    },
    'Subaru': {
        'Forester': ['2.0', '2.5', 'Touring 2.5'],
        'Outback': ['2.5', 'XT 2.4 Turbo'],
        'Impreza': ['2.0', 'Sport 2.0']
    },
    'Suzuki': {
        'Jimny': ['1.5', '4All 1.5', 'Sierra 1.5'],
        'Vitara': ['1.4 Turbo', '4You 1.4', 'Limited 1.4'],
        'Swift': ['1.0', '1.2', 'GL 1.2']
    },
    'Volvo': {
        'XC40': ['T4', 'T5', 'Recharge'],
        'XC60': ['T5', 'T6', 'Inscription T5'],
        'XC90': ['T6', 'Inscription T6']
    },
    'Porsche': {
        '911': ['Carrera', 'Carrera S', 'Turbo S'],
        'Cayenne': ['3.0 V6', 'S 2.9', 'Turbo GT'],
        'Macan': ['2.0', 'S 2.9', 'GTS 2.9']
    },
    'Land Rover': {
        'Discovery Sport': ['2.0', 'R-Dynamic 2.0', 'HSE 2.0'],
        'Range Rover Evoque': ['2.0', 'R-Dynamic 2.0'],
        'Defender': ['2.0', '3.0', '110 2.0']
    },
    'Jaguar': {
        'XE': ['2.0', 'R-Dynamic 2.0'],
        'F-Pace': ['2.0', 'S 3.0', 'R-Dynamic 2.0'],
        'E-Pace': ['2.0', 'R-Dynamic 2.0']
    },
    'Chery': {
        'Tiggo 5x': ['1.5 Turbo', 'Pro 1.5'],
        'Tiggo 7': ['1.5 Turbo', 'Pro Max 1.5'],
        'Tiggo 8': ['1.6 Turbo', 'Pro 1.6']
    },
    'GWM': {
        'Haval H6': ['1.5 Turbo', 'Premium 1.5'],
        'Ora 03': ['Skin', 'GT'],
        'Poer': ['2.0 Diesel', 'Premium 2.0']
    }
};
