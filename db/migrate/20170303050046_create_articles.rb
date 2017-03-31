class CreateArticles < ActiveRecord::Migration[5.0]
  def change
    create_table :articles do |t|
      t.integer :author_id, null: false
      t.string :title, null: false
      t.text :article, null: false
      t.date :date, null: false
      t.integer :likes, default: 0
      t.integer :views, default: 0
      t.timestamps
    end
  end
end
