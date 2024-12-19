type MonthlyData = {
  month: string; // Le nom ou identifiant du mois, par exemple "Janvier"
  value: number; // La valeur associée à ce mois pour la colonne
};

type ColumnData = {
  columnLabel: string; // Nom de la colonne, par exemple "Ventes", "Revenu", etc.
  monthlyData: MonthlyData[]; // Tableau des données pour chaque mois
};

export type Sales_report = {
  columns: ColumnData[]; // Tableau des colonnes, chacune avec ses données par mois
};
