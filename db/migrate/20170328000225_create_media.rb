class CreateMedia < ActiveRecord::Migration[5.0]
  def change
    create_table :media do |t|
      t.text :url, null: false
      t.integer :article_id
      t.timestamps
    end
    add_index :media, :article_id
  end
end
