
from io import StringIO
from itertools import islice
import csv

class CsvValidator:

    def invalidUpload(self, file):
        csvReader = csv.reader(StringIO(file.read().decode('utf-8')))

        file.seek(0)
        fileSample = file.read(2048).decode('utf-8')
        if not csv.Sniffer().has_header(fileSample):
            return True

        invalidRows = list(filter(lambda row: self.__invalidRow(row), islice(csvReader, 1, None)))
        return len(invalidRows) != 0

    def __invalidRow(self, row):

        invalidCells = list(filter(lambda cell: not cell.replace('.', '', 1).isdigit(), islice(row, 1, None)))
        return len(invalidCells) != 0