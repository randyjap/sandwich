class CreateArticles < ActiveRecord::Migration[5.0]
  def change
    create_table :articles do |t|
      t.integer :author_id, null: false
      t.string :title, null: false
      t.text :article, null: false
      t.date :date, null: false
      t.integer :views, default: 0
      t.string :category, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.timestamps
    end
    add_index :articles, :author_id
  end
end
