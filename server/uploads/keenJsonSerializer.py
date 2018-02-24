
import json
import gzip
import csv
from io import StringIO

class KeenJsonSerializer:

    def serializeFile(self, filename):
        data_dictionary = {'headers': [], 'rows': []}
        with gzip.open('data_files/' + filename, 'rb') as file_in:
            csvReader = csv.reader(StringIO(file_in.read().decode('utf-8')))

        headers = next(csvReader)
        keys = list(map(lambda header: header.lower().replace(' ', '_'), headers))
        data_dictionary['headers'] = self.__processDataRow(headers, keys)
        data_dictionary['rows'] = list(map(lambda row: self.__processDataRow(row, keys), csvReader))

        return json.dumps(data_dictionary)

    def __processDataRow(self, row, keys):
        row_dictionary = { } 
        for index in range(0, len(row)):
            row_dictionary[keys[index]] = row[index]
        return row_dictionary